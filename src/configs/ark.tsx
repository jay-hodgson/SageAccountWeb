import React from 'react'
import { SourceAppConfig } from 'components/SourceAppConfigs'
import { arkPortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/ARKLogo.svg'

const description =
  'The  ARK  Portal  hosts  data  generated  by  a  network  of  research  teams  working  collaboratively  to  deepen  the  understanding  of  Autoimmune  and  Immune-Mediated  Diseases'

const logo = <img src={LogoSvg} alt="Logo" />

export const ark: SourceAppConfig = {
  appId: 'ARK',
  appURL: 'https://arkportal.synapse.org/',
  friendlyName: 'ARK  Portal',
  logo,
  theme: {
    palette: arkPortalPalette,
  },
  description,
}
