import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ShortCodeState, ShortCodeStateModel } from './short-code.state';
import { SetShortCodeAction } from './short-code.actions';

describe('ShortCode store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ShortCodeState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ShortCodeStateModel = {
      items: ['item-1']
    };
    store.dispatch(new SetShortCodeAction('item-1'));
    const actual = store.selectSnapshot(ShortCodeState.getState);
    expect(actual).toEqual(expected);
  });

});
