const { default: useModalDOM } = require("helpers/hooks/useModalDOM");
const { default: useScrollAnchor } = require("helpers/hooks/useScrollAnchor");
const { default: useScrollToTop } = require("helpers/hooks/useScrollToTop");

export default function Documents({ children }) {
  useModalDOM();
  useScrollAnchor();
  useScrollToTop();

  return children;
}
