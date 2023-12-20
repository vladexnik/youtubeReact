import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, 
    demoVideoTitle, demoVideoUrl, 
    demoChannelTitle, demoChannelUrl } from '../utils/constants';


const VideoCard = ({video}) => {
    const {id: {videoId}, snippet}=video;

  return (
    <Card sx={{ 
        width: '320px',
        boxShadow: 'none', borderRadius: '10%'
    }}>
        
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>   
            <CardMedia
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{ width: '320px', height: 180 }}    
            />
        </Link>
        <CardContent sx={{
            backgroundColor: '#1e1e1e',
            height:'106px',
            
        }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl }>
                <Typography variant="subtitle2" fontWeight="bold" color="grey">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle
                        sx={{ fontSize: 12, color: 'gray', ml: '5px'}}
                    />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard;