import { useVideoTexture } from "@react-three/drei";

import { models } from "@/config";

const VideoMaterial = () => {
  const texture = useVideoTexture(models.videoUrl);

  return <meshStandardMaterial map={texture} />;
};

export default VideoMaterial;
