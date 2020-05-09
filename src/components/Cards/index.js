import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./style.module.css";
import styled from "styled-components";

const StyledCard = styled(Grid)`
  border-radius: 0.5rem;
  box-shadow: 0.5rem 0.5rem 0.6rem var(--color-grey-dark-1) ;
  margin:1rem 2rem;
  font-size:1.4rem;
`;

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className={styles.cards}>
      <Grid container spacing={3} justify-content="center">
        <StyledCard
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent className={styles.card__content}>
            <Typography variant="h4">INFECTED</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed?.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </StyledCard>
        <StyledCard
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent className={styles.card__content}>
            <Typography variant="h4">RECOVERED</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered?.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries cases of COVID-19
            </Typography>
          </CardContent>
        </StyledCard>
        <StyledCard
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent className={styles.card__content}>
            <Typography variant="h4">DEATHS</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths?.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
    </div>
  );
};

export default Cards;
