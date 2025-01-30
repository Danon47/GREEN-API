import { Box, Typography } from '@mui/material';

const Message = ({ text, isMy }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isMy ? 'flex-end' : 'flex-start',
        mb: 1,
      }}
    >
      <Box
        sx={{
          bgcolor: isMy ? '#dcf8c6' : 'white',
          borderRadius: 2,
          p: 1.5,
          maxWidth: '70%',
          position: 'relative',
          boxShadow: 1,
          '&:before': {
            content: '""',
            position: 'absolute',
            width: 0,
            height: 0,
            [isMy ? 'right' : 'left']: -10,
            top: 0,
            borderStyle: 'solid',
            borderWidth: '0 16px 16px 0',
            borderColor: `transparent ${isMy ? '#dcf8c6' : 'white'} transparent transparent`,
            transform: isMy ? 'rotate(270deg)' : 'rotate(90deg)',
          }
        }}
      >
        <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
          {text}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'right',
            color: '#667781',
            mt: 0.5,
          }}
        >
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Typography>
      </Box>
    </Box>
  );
};

export default Message;