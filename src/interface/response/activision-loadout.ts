export interface ActivisionLoadout {
  primaryWeapon: {
    name: string;
    label: string;
    imageLoot: string;
    imageIcon: string;
    variant: string;
    attachments: any[];
  },
  secondaryWeapon: {
    name: string;
    label: string;
    imageLoot: string;
    imageIcon: string;
    variant: string;
    attachments: any[];
  },
  perks: any[];
  extraPerks: any[];
  killstreaks: any[];
  tactical: {
    name: string;
    label: string;
    image: string;
    imageLarge: string;
    progressionImage: string;
  },
  lethal: {
    name: string;
    label: string;
    image: string;
    imageLarge: string;
    progressionImage: string;
  }
}
