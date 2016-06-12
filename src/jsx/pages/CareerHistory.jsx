import React, { PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { configLoad, pagesLoad } from '../../scripts/actions';
import PageContent from '../components/PageContent.jsx';
import SkillsTableWrapper from '../components/Skills/SkillsTableWrapper.jsx';

export class Skills extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(configLoad());
    dispatch(pagesLoad('skills'));
  }

  render() {
    const { config, pages} = this.props
    const configItems = config.items;
    const pagesItems = pages.items;
    const status = configItems.status;
    const meta = {
      title: '[' + status + '] ' + pagesItems.title,
      description: pagesItems.description,
      canonical: pagesItems.canonical,
    }

    var pageName = 'career-history';
    var pageClass = 'c-'+pageName+'-page';
    var sectionClasses = pageClass+' ' + status;
    var bemClass = pageClass + '_content';
    if(pages.isFetching) {
      return(
        <section class="loader">
          <span>Content is totally loading...</span>
        </section>
      )
    } else {
      return(
        <section class={ sectionClasses }>
          <DocumentMeta {...meta} />
          <PageContent pageName={pageName} cssclass={bemClass} />
        </section>
      )
    }

  }
}

function select(state) {
  const { config, pages } = state;
  return {
    config,
    pages
  };
}

export default connect(select)(Skills);
