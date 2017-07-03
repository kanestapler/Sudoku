import { SudokuPage } from './app.po';

describe('sudoku App', () => {
  let page: SudokuPage;

  beforeEach(() => {
    page = new SudokuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
