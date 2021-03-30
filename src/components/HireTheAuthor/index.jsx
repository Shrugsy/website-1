import React from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'react-intl';

import { sendCustomAnalyticsEvent } from '../../utils/helper';
import config from '../../content/meta/config';

const HireTheAuthor = () => (
  <div className="flex flex-col" data-cy="hire-the-author">
    <a
      className="w-100 flex flex-col bg-none rounded-lg user-select-none"
      href="/contact"
      onClick={() => sendCustomAnalyticsEvent('Hire the author card clicked')}
    >
      <StaticImage alt={config.baseName} src="../../images/about.jpg" />
      <p className="p-2 bg-secondary text-main-text text-center text-md">
        <FormattedMessage id="shortSummary" />
      </p>
    </a>
  </div>
);

HireTheAuthor.propTypes = {
  image: PropTypes.object,
};

export default HireTheAuthor;
