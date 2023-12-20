import { Stack, Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';
import Loader from './Loader';

const Videos = ({videos, direction}) => {
  if(!videos?.length) return <Loader />;
    
    // console.log(videos);
   return (
    <Stack>
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" alignItems="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} /> }
            {item.id.channelId && <ChannelCard channelDetail={item} /> }
          </Box>
        ))}

      </Stack>
    </Stack>
  );
}

export default Videos;