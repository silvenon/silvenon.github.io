// flow-typed signature: 525e425435fabe80a8a5f3ed2265e5c7
// flow-typed version: <<STUB>>/gatsby_v2.0.0-rc.15/flow_v0.80.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'gatsby'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

type GraphQLOutput = void

declare module 'gatsby' {
  declare export function withPrefix(string): string
  declare export function graphql(string[]): GraphQLOutput
  declare export function navigate(string): void
  declare export class StaticQuery extends React$Component<{
    query: GraphQLOutput,
    render: (*) => React$Node,
  }, *> {}
  declare export class Link extends React$Component<{
    to: string,
    activeStyle?: {},
    innerRef?: React$Ref<*>,
    state?: {},
  }, *> {}
}
