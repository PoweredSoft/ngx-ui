import { Component, ContentChild, ContentChildren, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, QueryList } from '@angular/core';
import { IDataSource, IDataSourceValidationError } from '@poweredsoft/data';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DsCommandContentDirective } from './directives/ds-command-content.directive';
import { DsCommandErrorDirective } from './directives/ds-command-error.directive';
import { DsCommandFooterDirective } from './directives/ds-command-footer.directive';
import { DsCommandNoCommandDirective } from './directives/ds-command-no-command.directive';
import { DsCommandSubmitDirective } from './directives/ds-command-submit.directive';
import { DsCommandValidationDirective } from './directives/ds-command-validation.directive';

export interface DsCommandPropertyError
{
  name: string,
  errors: string[];
}

@Component({
  selector: 'ps-ds-command',
  templateUrl: './ds-command.component.html',
  styleUrls: ['./ds-command.component.scss']
})
export class DsCommandComponent implements OnInit, OnDestroy {
  @Input() dataSource: IDataSource<any>;
  @Input() name: string;
  @Input() model: any;
  @Input() refreshOnSuccess: boolean;
  @Input() resolveCommand: boolean;

  @Output() success = new EventEmitter<any>();
  @Output() loading = new EventEmitter<boolean>();
  @Output() commandChange = new EventEmitter<any>();

  @ContentChild(DsCommandContentDirective) commandContent: DsCommandContentDirective;
  @ContentChild(DsCommandFooterDirective) footerContent: DsCommandFooterDirective;
  @ContentChild(DsCommandNoCommandDirective) noCommandContent: DsCommandNoCommandDirective;
  @ContentChild(DsCommandErrorDirective) errorContent: DsCommandErrorDirective;
  @ContentChild(DsCommandValidationDirective) validationDirective: DsCommandValidationDirective;
  @ContentChildren(DsCommandSubmitDirective) submitDirectives: QueryList<DsCommandSubmitDirective>;

  lastErrorMessage: string;
  lastValidationResult: DsCommandPropertyError[];

  protected _command: any = null;

  private _loading = false;
  private _validationErrorSubscription: Subscription;
  private _notifyMessageSubscription: Subscription;


  @Input() set command(value: any) {
    if (this._command != value) {
      this._command = value;
      this.commandChange.emit(value);
    }
  }

  get noCommand() {
    return this._command ? true : false;
  }

  get command() {
    return this._command;
  }

  get hasContent() {
    return this.commandContent != null && this.commandContent.template != null;
  }

  get footerTemplate() {
    return this.footerContent.template;
  }

  get hasFooterTemplate() {
    return this.footerContent?.template != null;
  }

  get hasValidationTemplate() {
    return this.validationDirective != null && this.validationDirective.template != null;
  }

  get validationTemplate() {
    return this.validationDirective.template;
  }

  get contentTemplate() {
    return this.commandContent.template;
  }

  constructor() {

  }

  ngOnDestroy() {
    this._validationErrorSubscription?.unsubscribe();
    this._notifyMessageSubscription?.unsubscribe();
  }

  ngOnInit(): void {

    this._validationErrorSubscription = this.dataSource
      .validationError$.subscribe(validationResult => {
        this.lastValidationResult = Object.keys(validationResult.errors).reduce<DsCommandPropertyError[]>((prev, attr) => {
          prev.push({
            name: attr,
            errors: validationResult.errors[attr]
          })
          return prev;
        }, []);
      });

    this._notifyMessageSubscription = this.dataSource.notifyMessage$.subscribe(message => {
      if (message.type != 'info')
        this.lastErrorMessage = message.message;
    });

    const shouldResolve = this.resolveCommand === undefined ? true : this.resolveCommand;
    if (shouldResolve)
      this.resolveModel();
  }

  resolveModel() {
    this.dataSource.resolveCommandModelByName({
      model: this.model,
      command: this.name
    }).subscribe(
      commandModel => {
        this.command = commandModel;
      },
      _ => { }
    );
  }

  private changeLoadingState(loading: boolean) {
    if (loading != this._loading) {
      this._loading = loading;
      this.loading.emit(loading);
    }
  }

  @HostListener("click", ["$event"])
  childClicked($event: MouseEvent) {
    const element = $event.target;
    const found = this.submitDirectives
      .toArray()
      .find(t => t.element.nativeElement == element);

    if (found != null) 
      this.execute()
  }

  execute() {

    // secure from double send.
    if (this._loading)
      return;

    this.changeLoadingState(true);
    this.lastValidationResult = null;
    this.lastErrorMessage = null;
    this.dataSource.executeCommandByName(this.name, this._command)
      .pipe(
        finalize(() => this.changeLoadingState(false))
      )
      .subscribe(
        commandResult => {
          this.success.emit(commandResult);
          if (this.refreshOnSuccess)
            this.dataSource.refresh();
        },
        _ => {
          // we just catch the error, this way its not uncatched its handled via the other
          // subscriptions.
        }
      );
  }

  get isLoading() {
    return this._loading;
  }

}
