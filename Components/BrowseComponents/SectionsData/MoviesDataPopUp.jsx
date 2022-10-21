import classes from "../../../styles/BrowsePageStyle/SectionsStyle/MoviesDataPopUp.module.css";
import { OverlayTrigger } from "react-bootstrap";
import useMovieInfo from "../../../hooks/movieinfo-hook";
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { CgChevronUpO } from "react-icons/cg";

const MoviesDataPopUp = (props) => {
  const {
    rating,
    onOpenRatingHandler,
    onCloseRatingHandler,
    renderTooltipPlus,
    renderTooltipRate,
    renderTooltipMore,
  } = useMovieInfo(props.release_date);

  return (
    <div className={props.className}>
      <div className={classes.icons_div}>
        <div className={classes.icons_left}>
          <OverlayTrigger
            placement="top"
            delay={{ show: 100, hide: 200 }}
            overlay={renderTooltipPlus}
          >
            <span>
              <AiOutlinePlusCircle
                className={`${classes.icon} ${classes.first_last_icon}`}
              />
            </span>
          </OverlayTrigger>

          <div className={classes.icon_rating}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 100, hide: 200 }}
              overlay={renderTooltipRate}
            >
              <span>
                <AiOutlineCheckCircle
                  className={classes.icon}
                  onClick={onOpenRatingHandler}
                />
              </span>
            </OverlayTrigger>
            {rating && (
              <div
                className={classes.icon_thumb_div}
                onClick={onCloseRatingHandler}
              >
                <FiThumbsUp className={`${classes.icon_thumb} me-2`} />
                <FiThumbsDown className={`${classes.icon_thumb} ms-2`} />
              </div>
            )}
          </div>
        </div>

        <div className={classes.icons_right}>
          <OverlayTrigger
            placement="top"
            delay={{ show: 100, hide: 200 }}
            overlay={renderTooltipMore}
          >
            <span onClick={props.onOpenMovieModal}>
              <CgChevronUpO
                className={`${classes.icon} ${classes.first_last_icon}`}
              />
            </span>
          </OverlayTrigger>
        </div>
      </div>

      <div className={classes.movie_tip}>
        <p className={classes.movie_text}>
          {!props.adult && <span className={classes.movie_age}>G</span>}
          {props.adult && <span className={classes.movie_age}>PG</span>}
          <span className={classes.movie_vote}>
            {/* {props.vote_average.toFixed(1)} Rating */}
          </span>
          <span className={classes.movie_hd}>HD</span>
        </p>
        <p className={classes.genre_text}>{props.genre_content}</p>
      </div>
    </div>
  );
};

export default MoviesDataPopUp;
