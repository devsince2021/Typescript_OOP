type Video = {
  id: string;
  title: string;
  url: string;
  data: string;
};

type VideoMetaData = Omit<Video, 'url' | 'data'>

function getVideo(id: string) {
  return {
    id,
    title: 'video',
    url: 'http://...',
    data: 'byte-data..',
  };
}

function getVideoMetaData(id: string): VideoMetaData {
  return {
    id,
    title: 'video',
  }
}