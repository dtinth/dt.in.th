---
public: true
title: Context provider pattern in React
created: 2020-06-12
aliases:
  - 20200612T133614Z5625
---

# Context provider pattern in React

```tsx
type ThingyContext = {
  mounted: () => () => void
  // ...
}

function initializeThingyContext(): ThingyContext {
  // ...
}

const ThingyContext = createContext<ThingyContext | null>(null)

export function ThingyContextProvider(props: { children: ReactNode }) {
  const [context] = useState(() => initializeThingyContext())
  useEffect(() => context.mounted(), [context])
  return (
    <ThingyContext.Provider value={context}>
      {props.children}
    </ThingyContext.Provider>
  )
}

export function useThingyContext() {
  const context = useContext(ThingyContext)
  if (!context) {
    throw new Error('No ThingyContext provided')
  }
  return context
}
```
