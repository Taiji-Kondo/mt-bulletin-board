---
name: 'component'
root: '.'
output: './src/components/'
questions:
  componentType:
    message: 'Please select a component type.' 
    choices:
      - 'features'
      - 'elements'
      - 'ui'
  filename: 'Please enter a component name.'
---

# `{{ inputs.componentType }}/{{ inputs.filename | pascal }}.tsx`

```typescript
type {{ inputs.filename | pascal }}PropsType = {};

export const {{ inputs.filename | pascal }} = ({}: {{ inputs.filename | pascal }}PropsType) => {
  return <></>;
};
```
