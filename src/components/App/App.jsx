import { useState, useEffect } from 'react';
import { Searchbar } from 'components/Searchbar';
import { toast, ToastContainer } from 'react-toastify';
import { ImageGallery } from 'components/ImageGallery';
import { MainDiv, Btn } from 'components/App/App.styled';
import { Loader } from 'components/Loader/Loader';
import { findImages } from 'components/services/api';
import { ImgErorView } from 'components/ImgErorView';

import { Error } from 'components/Error';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(1);
  const [empty, setEmpty] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (searchQuery) responseQuery();

    async function responseQuery() {
      try {
        setShowButton(true);
        setLoading(true);
        const response = await findImages(searchQuery, page);

        if (!response.hits.length) {
          toast.error(`Ничего не найдено по Вашему запросу`);
          return setEmpty(true);
        }
        setImages(prevState => [...prevState, ...response.hits]);
        setTotal(response.total);
        setEmpty(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  }, [page, searchQuery]);

  const handleSubmit = imageName => {
    if (searchQuery === imageName) {
      toast.error(`Мы уже нашли это изображние`);
      return;
    }
    setSearchQuery(imageName);
    setPage(1);
    setImages([]);
    setError(null);
    setLoading(false);
    setTotal(1);
    setEmpty(false);
  };
  const loadMoreBtn = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <MainDiv>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {error && <Error error={error} />}
      {loading && <Loader />}
      {empty && <ImgErorView />}
      {total / 12 > page && !loading && showButton && (
        <Btn type="button" onClick={loadMoreBtn}>
          Load more
        </Btn>
      )}
      <ToastContainer autoClose={3000} />
    </MainDiv>
  );
};
