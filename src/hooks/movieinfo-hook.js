import { useState } from "react";
import { Tooltip } from "react-bootstrap";

const useMovieInfo = (release_date) => {
  //useState to handle the Movie genre, loading and error states
  const [scaleUp, setScaleUp] = useState(false);
  const [rating, setRating] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const renderTooltipPlus = (props) => (
    <Tooltip id="button-plus" className='tooltip' {...props}>
      Add to watchlist
    </Tooltip>
  );

  const renderTooltipRate = (props) => (
    <Tooltip id="button-rate" className='tooltip' {...props}>
      Rate movie
    </Tooltip>
  );

  const renderTooltipMore = (props) => (
    <Tooltip id="button-more" className='tooltip' {...props}>
      Show more
    </Tooltip>
  );

  const onScaleUpHandler = () => {
    setScaleUp(true);
  };

  const onScaleDownHandler = () => {
    setScaleUp(false);
  };

  const onOpenRatingHandler = () => {
    setRating(true);
  };

  const onCloseRatingHandler = () => {
    setRating(false);
  };

  const onOpenMovieModal = () => {
    setModalIsOpen(true);
  };

  const onCloseMovieModal = () => {
    setModalIsOpen(false);
  };

  //Using slice to display year of the date alone
  const releaseDate = release_date.slice(0, 4);

  //returning values to be used in components
  return {
    releaseDate,
    scaleUp,
    rating,
    modalIsOpen,
    onCloseMovieModal,
    onOpenMovieModal,
    onScaleUpHandler,
    onScaleDownHandler,
    onOpenRatingHandler,
    onCloseRatingHandler,
    renderTooltipPlus,
    renderTooltipRate,
    renderTooltipMore,
  };
};

export default useMovieInfo;
