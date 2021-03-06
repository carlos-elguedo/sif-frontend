import React from 'react';
import CardGrid from 'emerald-ui/lib/CardGrid';
import Card from 'emerald-ui/lib/Card';
import ImageUser from '../user/ImageUser';
import { CLIENT_ROUTES } from '../../constants';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

const ResultPanel = ({ title, workers }) => {
  const renderResults = () => {
    return workers.map((worker, i) => {
      return (
        <LinkContainer
          to={`${CLIENT_ROUTES.view.replace(':id', worker.id)}`}
          key={i}
          style={{ cursor: 'pointer' }}
        >
          <Card key={i}>
            <ImageUser img_h="150" img_w="150" img_url={worker.profileImage} />
            <h1 className="eui-card-title">{worker.name}</h1>
            <h2 className="eui-card-subtitle">{worker.profession.name_es}</h2>
          </Card>
        </LinkContainer>
      );
    });
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-title re-card-header">{title}</div>
          <div className="card-body">
            <CardGrid>{renderResults()}</CardGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;
