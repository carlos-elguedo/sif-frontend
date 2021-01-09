import React from 'react';
import CardGrid from 'emerald-ui/lib/CardGrid';
import Card from 'emerald-ui/lib/Card';
import ImageUser from '../user/ImageUser';

const ResultPanel = ({ title, workers }) => {
  console.log('ResultPanel -> workers va a pintar', workers);

  const renderResults = () => {
    return workers.map((worker, i) => {
      return (
        <Card key={i}>
          <ImageUser img_h="150" img_w="150" img_url={worker.profileImage} />
          <h1 className="eui-card-title">{worker.name}</h1>
          <h2 className="eui-card-subtitle">{worker.profession.name_es}</h2>
        </Card>
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
