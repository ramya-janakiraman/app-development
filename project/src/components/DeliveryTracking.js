import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Typography } from '@mui/material';

const DeliveryTracking = () => {
  return (
    <Timeline position="alternate" sx={{ padding: 0 }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: '#F6BE00' }} />
          <TimelineConnector sx={{ backgroundColor: '#F6BE00' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#333' }}>Order Confirmed</Typography>
          <Typography variant="caption" sx={{ color: '#666' }}>Sat, 27th Apr</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: '#F6BE00' }} />
          <TimelineConnector sx={{ backgroundColor: '#F6BE00' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#333' }}>Shipped</Typography>
          <Typography variant="caption" sx={{ color: '#666' }}>Sun, 28th Apr</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: '#F6BE00' }} />
          <TimelineConnector sx={{ backgroundColor: '#F6BE00' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#333' }}>Out for Delivery</Typography>
          <Typography variant="caption" sx={{ color: '#666' }}>Mon, 29th Apr</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: '#F6BE00' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#333' }}>Delivered</Typography>
          <Typography variant="caption" sx={{ color: '#666' }}>Tue, 30th Apr</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default DeliveryTracking;
