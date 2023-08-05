import React, { FC, useEffect, useState } from "react";
import { ResourceClient } from "../../api";
import { IResourceResponseDto } from "../../dto/resource/IResourceResponseDto";
import { VideoStack } from "../../components/VideoStack/VideoStack";
import { VideoCard } from "../../components/VideoCard/VideoCard";

export const ResourceView: FC = ({}) => {
  const [resources, setResources] = useState<IResourceResponseDto[]>([]);

  useEffect(() => {
    ResourceClient.loadResources()
      .then((data) => setResources(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <VideoStack>
        {resources.map(({ id, name }, i) => (
          <VideoCard key={i}>
            <video controls>
              <source src={ResourceClient.getResourcePath(name)} />
            </video>
          </VideoCard>
        ))}
      </VideoStack>
    </div>
  );
};
