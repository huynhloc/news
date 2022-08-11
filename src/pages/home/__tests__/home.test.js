import { render, waitFor, fireEvent, within } from '../../../utils/testUtils';
import * as newsApis from '../../../apis/news';
import Home from '../index';

let getNewsMock;
const mockCall = () => {
  const getNewsMock = jest.spyOn(newsApis, 'getNews');  // spy on otherFn
  getNewsMock.mockResolvedValue({
    articles: [
      {
        "source": {
          "id": null,
          "name": "CNN"
        },
        "author": "Erin Marquis",
        "title": "Russia Turns to Cannibalizing Aircraft to Keep Jets in the Air",
        "description": "Russia hasn’t been able to import replacement parts for its fleet of commercial planes since March and now are beginning...\nThe post Russia Turns to Cannibalizing Aircraft to Keep Jets in the Air appeared first on Gizmodo Australia.\n\n  Related Stories\r\n<ul><l…",
        "url": "https://www.gizmodo.com.au/2022/08/russia-turns-to-cannibalizing-aircraft-to-keep-jets-in-the-air/",
        "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/08/10/322acfa0924a0463f618d0d2c5d4b579.jpg?quality=80&resize=1280,720",
        "publishedAt": "2022-08-11T03:00:32Z",
        "content": "Russia hasnt been able to import replacement parts for its fleet of commercial planes since March and now are beginning the possibly dangerous process of taking critical parts from other, weaker jets… [+2341 chars]"
      },
      {
        "source": {
        "id": null,
        "name": "BBC"
        },
        "author": "Isaiah Richard",
        "title": "Elon Musk Social Media: X.Com to be a New Online Platform? CEO Teases in New Tweet",
        "description": "Twitter did not work, so Elon Musk is creating a new platform with X.com.",
        "url": "https://www.techtimes.com/articles/279026/20220810/elon-musk-social-media-x-com-new-online-platform-ceo.htm",
        "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/396776/elon-musk-teases-a-new-social-media-platform.jpg",
        "publishedAt": "2022-08-11T02:40:00Z",
        "content": "Elon Musk is teasing a new social media platform that he would create, and it will take the domain and name of \"X.com,\" a known previous venture of the tech CEO. Previously, X.com was an online bakin… [+3153 chars]"
        },
    ]
  });
}

beforeEach(() => {
  mockCall();
});

afterEach(() => {
  getNewsMock?.mockRestore();
});


describe('<Home />', () => {
  test('renders Home with initial data', async () => {

    const { container, getAllByTestId } = render(<Home />);
    expect(container).toHaveTextContent('Filter by source');

    await waitFor(() => expect(getAllByTestId('article')).toHaveLength(2));

    expect(container).toHaveTextContent('Erin Marquis');
    expect(container).toHaveTextContent('Isaiah Richard');
  });

  test('renders Home with filter data', async () => {

    const { container, getAllByTestId, getByTestId } = render(<Home />);
    expect(container).toHaveTextContent('Filter by source');

    await waitFor(() => expect(getAllByTestId('article')).toHaveLength(2));

    expect(container).toHaveTextContent('Erin Marquis');
    expect(container).toHaveTextContent('Isaiah Richard');



    const autocomplete = getByTestId('source-filter-combobox');
    const input = within(autocomplete).getByRole('combobox');

    autocomplete.focus();
    fireEvent.change(input, { target: { value: 'CN' } });
    fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
    fireEvent.keyDown(autocomplete, { key: 'Enter' });
    expect(input).toHaveValue('CNN');

    expect(container).toHaveTextContent('Erin Marquis');
    expect(container).not.toHaveTextContent('Isaiah Richard');
  });
});
