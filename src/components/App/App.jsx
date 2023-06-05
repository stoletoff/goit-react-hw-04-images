import { Component } from 'react';
import { Searchbar } from 'components/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { findImages } from 'components/services/api';
import { MainDiv, Btn } from './App.styled';
import Loader from 'components/Loader/Loader';
import ImgErorView from 'components/ImgErorView/ImgErorView';
import { ImageGallery } from 'components/ImageGallery';
export class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    error: null,
    loading: false,
    total: 1,
    empty: false,
  };

  onMoreLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSubmit = searchQuery => {
    if (searchQuery === this.state.searchQuery) {
      return toast.error('Мы уже нашли это изображние');
    }
    this.setState({
      searchQuery,
      page: 1,
      images: [],
      error: null,
      loading: false,
      total: 1,
    });
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.responseQuery(searchQuery, page);
    }
  }

  responseQuery = async (imgName, page) => {
    try {
      this.setState({ loading: true });
      const result = await findImages(imgName, page);
      if (!result.hits.length) {
        toast.error('Ничего не найденно');
        return this.setState({ empty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...result.hits],
        total: result.total,
        empty: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { page, images, loading, total, empty } =
      this.state;
    return (
      <MainDiv>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {loading && <Loader />}
        {total / 12 > page && (
          <Btn onClick={this.onMoreLoad} type="button">
            Load more
          </Btn>
        )}
        {empty && <ImgErorView>Ничего не найденно</ImgErorView>}
        <ToastContainer autoClose={3000} />
      </MainDiv>
    );
  }
}
