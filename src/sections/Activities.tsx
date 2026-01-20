import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { resumeData } from '../data/resumeData';
import './Activities.scss';

const Activities = () => {
  const activities = resumeData.activities || [];

  return (
    <Box id="activities" className="activities-section">
      <Container maxWidth="xl">

        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 6 }}>
          <LocalActivityIcon className="section-icon" />
          <Typography variant="h3" className="section-heading">
            Activities
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 4
          }}
        >
          {activities.map((activity, index) => (
            <Paper key={index} elevation={0} className="activity-card">
              <Box className="activity-header">
                <Typography variant="h6" className="activity-role">
                  {activity.role}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  className="activity-period"
                >
                  <DateRangeIcon fontSize="small" />
                  <Typography variant="body2">
                    {activity.period}
                  </Typography>
                </Stack>
              </Box>

              <Typography variant="subtitle1" className="activity-org">
                {activity.organization}
              </Typography>

              <Typography variant="body2" className="activity-desc">
                {activity.description}
              </Typography>
            </Paper>
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Activities;
