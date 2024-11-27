import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Cube_screen_1_0: THREE.Mesh;
    Cube_screen_glass_0: THREE.Mesh;
    Cube_screen_2_0: THREE.Mesh;
    Cube002_joycon_red_1_0: THREE.Mesh;
    Cube001_joycon_left_1_0: THREE.Mesh;
    Button_B_switch_image_0: THREE.Mesh;
    Button_A_switch_image_0: THREE.Mesh;
    Button_Y_switch_image_0: THREE.Mesh;
    Button_X_switch_image_0: THREE.Mesh;
    Arrow_Down_switch_image_0: THREE.Mesh;
    Arrow_Right_switch_image_0: THREE.Mesh;
    Arrow_Left_switch_image_0: THREE.Mesh;
    Arrow_Up_switch_image_0: THREE.Mesh;
    Circle_switch_image_0: THREE.Mesh;
    Circle001_switch_image_0: THREE.Mesh;
    Button_Circle_switch_image_0: THREE.Mesh;
    Button_Home_switch_image_0: THREE.Mesh;
    Cube003_trigger_0: THREE.Mesh;
    Cube004_trigger_0: THREE.Mesh;
    Cube005_screen_1_0: THREE.Mesh;
    Cube006_screen_1_0: THREE.Mesh;
  };
  materials: {
    screen_1: THREE.MeshStandardMaterial;
    screen_glass: THREE.MeshStandardMaterial;
    screen_2: THREE.MeshStandardMaterial;
    joycon_red_1: THREE.MeshStandardMaterial;
    joycon_left_1: THREE.MeshStandardMaterial;
    switch_image: THREE.MeshStandardMaterial;
    trigger: THREE.MeshStandardMaterial;
  };
};
