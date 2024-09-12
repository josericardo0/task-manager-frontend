import { addItem } from './utils';

test('adds item to list', () => {
  const list = ['item1'];
  const newItem = 'item2';
  expect(addItem(list, newItem)).toEqual(['item1', 'item2']);
});
