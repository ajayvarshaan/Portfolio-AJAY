import type { ComponentType } from 'react';
import { Box, Typography } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useGsapReveal } from '../hooks/useGsapReveal';
import './KeyInsights.scss';

const DEFAULT_ICONS = [
  LightbulbIcon,
  TrendingUpIcon,
  InsightsIcon,
  AutoAwesomeIcon,
  StarIcon,
  CheckCircleIcon
];

interface Insight {
  text: string;
  icon?: ComponentType;
}

interface KeyInsightsProps {
  title?: string;
  insights: Insight[];
}

const KeyInsights = ({ title = 'Key Insights', insights }: KeyInsightsProps) => {
  const revealRef = useGsapReveal();

  return (
    <Box className="key-insights" ref={revealRef}>
      <Typography variant="h5" className="section-heading" data-reveal>
        {title}
      </Typography>
      <Box className="insights-grid">
        {insights.map((insight, index) => {
          const Icon = insight.icon || DEFAULT_ICONS[index % DEFAULT_ICONS.length];
          return (
            <Box key={index} className="insight-card" data-reveal>
              <Box className="insight-icon">
                <Icon />
              </Box>
              <Typography component="p" className="insight-text">
                {insight.text}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default KeyInsights;

