enum TRACK_CATEGORY {
  RELAX = 'relax',
  SLEEP = 'sleep',
  FOCUS = 'focus'
}

interface Track {
  id: string;
  title: string;
  category: string;
  path: string;
}

const tracks: Track[] = [
  { id: '1', path: '/relax/bathed_in_neon.mp3', category: TRACK_CATEGORY.RELAX, title: 'Bathed in neon' },
  { id: '2', path: '/relax/low_tide.mp3', category: TRACK_CATEGORY.RELAX, title: 'Low tide' },
  { id: '3', path: '/relax/vapor.mp3', category: TRACK_CATEGORY.RELAX, title: 'Vapor' },
  { id: '4', path: '/sleep/dark_moon.mp3', category: TRACK_CATEGORY.SLEEP, title: 'Dark Moon' },
  { id: '5', path: '/sleep/lunaris.mp3', category: TRACK_CATEGORY.SLEEP, title: 'Lunaris' },
  { id: '6', path: '/sleep/moonflower.mp3', category: TRACK_CATEGORY.SLEEP, title: 'Moonflower' },
  { id: '7', path: '/focus/aspen_migration.mp3', category: TRACK_CATEGORY.FOCUS, title: 'Aspen Migration' },
  { id: '8', path: '/focus/cyan.mp3', category: TRACK_CATEGORY.FOCUS, title: 'Cyan' },
  { id: '9', path: '/focus/treasure_map.mp3', category: TRACK_CATEGORY.FOCUS, title: 'Treasure Map' },
];

export function getRelaxTracks(): Track[] {
  return tracks.filter((track) => track.category === TRACK_CATEGORY.RELAX);
}

export function getSleepTracks(): Track[] {
  return tracks.filter((track) => track.category === TRACK_CATEGORY.SLEEP);
}

export function getFocusTracks(): Track[] {
  return tracks.filter((track) => track.category === TRACK_CATEGORY.FOCUS);
}
