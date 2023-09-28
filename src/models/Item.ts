export interface Line {
  id: string;
  name: string;
}

interface Icon {
  id: string;
  resolutions: number[][];
}

interface Product {
  abbrev: string;
  name: string;
}

interface Triplet {
  [key: string]: string;
}

interface Firmware {
  board: string[];
  platform: string;
}

interface Feature {
  ucore: boolean;
}

interface Bleservice {
  configured: string;
  default: string;
  features: Feature;
}

interface Uisp {
  bleServices: unknown;
  firmware: Firmware;
  line: string;
  nameLegacy: string[];
}

interface RadioItem {
  gain: number;
  maxPower: number;
  maxSpeedMegabitsPerSecond: number;
}

interface Radio {
  [key: string]: RadioItem;
}

interface Network {
  bleServices: Bleservice[];
  deviceCapabilities: string[];
  ports: { [key: string]: number };
  radios: Radio;
  types: string;
}

interface Unifi {
  adoptability: string;
  network: Network;
}

interface Btle {
  factoryDefault: string;
  userConfigured: string;
}

export interface Item {
  id: string;
  deviceType?: string;
  guids: unknown[];
  icon: Icon;
  line: Line;
  product: Product;
  shortnames: string[];
  sysid: string;
  sysids: string[];
  triplets: Triplet[];
  uisp?: Uisp;
  unifi?: Unifi;
  btle?: Btle;
}
