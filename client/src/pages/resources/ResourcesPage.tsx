import React from 'react';
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { ResourceView } from "../../views/ResourcesView/ResourceView";

export const ResourcesPage: React.FC = () => {
  return (
    <PageContainer title="Медиа Ресурсы">
      <ResourceView />
    </PageContainer>
  );
};
