import './styles/navigation.css';
import './styles/main.css';

console.log('Day 1 Inference, Distill template loaded');

type VizModule = {
  [k: string]: unknown;
  default?: unknown;
};

const vizContext = (require as any).context(
  '../content/pages',
  true,
  /(visualization|visualizations)\.(js|ts)$|.*-viz\.(js|ts)$/
);

function getPageKey(): string {
  return document.documentElement.dataset.page || '';
}

function shouldLoad(modulePath: string, pageKey: string): boolean {
  if (!pageKey) return true;
  const normalized = modulePath.replace(/^\.\//, '');
  const key = pageKey.replace(/^\//, '').replace(/\/$/, '');
  return normalized.startsWith(key + '/');
}

function collectInitializers(mod: VizModule): Array<() => void> {
  const inits: Array<() => void> = [];

  for (const [name, value] of Object.entries(mod)) {
    if (name === 'default' && typeof value === 'function') {
      inits.push(value as () => void);
      continue;
    }

    if (name.startsWith('init') && typeof value === 'function') {
      inits.push(value as () => void);
    }
  }

  return inits;
}

function autoDiscoverVisualizations(): void {
  const pageKey = getPageKey();
  const all = vizContext.keys() as string[];
  const selected = all.filter((k) => shouldLoad(k, pageKey));

  console.log(
    `Viz modules, found ${all.length}, selected ${selected.length}, pageKey="${pageKey}"`
  );

  for (const key of selected) {
    try {
      const mod = vizContext(key) as VizModule;
      const initializers = collectInitializers(mod);

      if (initializers.length === 0) {
        console.warn(`No initializers found in ${key}`);
        continue;
      }

      for (const init of initializers) {
        console.log(`Init viz, ${key}, ${init.name || '(anonymous)'}`);
        init();
      }
    } catch (e) {
      console.warn(`Failed loading ${key}`, e);
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  autoDiscoverVisualizations();
});
