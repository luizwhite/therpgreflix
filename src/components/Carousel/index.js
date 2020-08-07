import React /* , { useEffect } */ from 'react';
import PropTypes from 'prop-types';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem /* , SliderMobile */ } from './components/Slider';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';

function VideoCardGroup({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const { videos } = category;

  /* checklater */
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>{categoryTitle}</Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url ? categoryExtraLink.url : '/'} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
        </>
      )}
      {videos && (
        <Slider arrowColor={categoryColor}>
          {videos.map((video, index) => {
            if (ignoreFirstVideo && index === 0) {
              return null;
            }

            return (
              <SliderItem key={video.titulo}>
                <VideoCard
                  videoTitle={video.titulo}
                  videoURL={video.url}
                  categoryColor={categoryColor}
                />
              </SliderItem>
            );
          })}
        </Slider>
      )}
    </VideoCardGroupContainer>
  );
}

VideoCardGroup.defaultProps = {
  ignoreFirstVideo: false,
};

VideoCardGroup.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.PropTypes.shape({
    cor: PropTypes.string,
    descricao: PropTypes.string,
    id: PropTypes.number,
    link_extra: PropTypes.objectOf(PropTypes.string),
    titulo: PropTypes.string,
    videos: PropTypes.arrayOf(PropTypes.shape({
      categoriaId: PropTypes.number,
      id: PropTypes.number,
      titulo: PropTypes.string,
      url: PropTypes.string,
    })),
  }).isRequired,
};

export default VideoCardGroup;
