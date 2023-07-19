import React, { Component } from 'react';
import { Container } from './Container/Container';

import { Section } from './Section/Section';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </Section>
      </Container>
    );
  }
}
