import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_27: THREE.Mesh;
  };
  materials: {
    box_out: THREE.MeshStandardMaterial;
    inner: THREE.MeshPhysicalMaterial;
    ["inner.001"]: THREE.MeshPhysicalMaterial;
  };
};

export type ActionName = "Animation";
export type GLTFActions = Record<ActionName, THREE.AnimationAction>;
