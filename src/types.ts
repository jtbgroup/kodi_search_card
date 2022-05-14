import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'kodi-search-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface KodiSearchCardConfig extends LovelaceCardConfig {
  // type: string;
  entity?: string;
  name?: string;
  // show_warning?: boolean;
  // show_error?: boolean;
  // test_gui?: boolean;
  // tap_action?: ActionConfig;
  // hold_action?: ActionConfig;
  // double_tap_action?: ActionConfig;
}
