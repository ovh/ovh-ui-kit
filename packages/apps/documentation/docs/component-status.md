# Component status

You can find here all definitions related on component status. On each components you will always find two status (CX Design and UX).

## Status

### CX Design

| Status            | Definition
| ----              | ----
| **None**          | CX team have not defined any guidelines or rules about this component.
| **Deprecated**    | CX team does not recommend to use this component anymore.
| **Partial**       | CX team have made some guidelines or mockups and they have been used on this component.
| **Complete**      | CX team have made all guidelines about this component.

### UX

| Status            | Definition
| ----              | ----
| **Prototype**     | This component is not ready to be used by any project.
| **Beta**          | Signatures may change a lot and this component should not be used. Use it a your own risk.
| **RC**            | Signatures should not change, only bug fixes. This component can be used.
| **Complete**      | This component is feature completed and can be used in all projects.

## Message types

### CX Design

| Type              | Status
| ----              | ----
| **Error**         | None, Deprecated
| **Warning**       | Partial
| **Success**       | Complete

### UX

| Type              | Status
| ----              | ----
| **Error**         | Prototype
| **Warning**       | Beta, RC
| **Success**       | Complete

## Examples

### Error

<component-status cx-design="none" ux="prototype"></component-status>

<component-status cx-design="deprecated" ux="rc"></component-status>

### Warning

<component-status cx-design="partial" ux="beta"></component-status>

<component-status cx-design="complete" ux="beta"></component-status>

### Success

<component-status cx-design="complete" ux="complete"></component-status>
