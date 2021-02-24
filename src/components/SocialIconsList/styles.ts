import styled from 'styled-components'

export const SocialIconsListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;

  .github-icon {
    color: ${({
      theme: {
        colours: { brands }
      }
    }) => brands.github};
  }

  .medium-icon {
    color: ${({
      theme: {
        colours: { brands }
      }
    }) => brands.medium};
  }

  .blogger-icon {
    color: ${({
      theme: {
        colours: { brands }
      }
    }) => brands.blogger};
  }

  .twitter-icon {
    color: ${({
      theme: {
        colours: { brands }
      }
    }) => brands.twitter};
  }

  .linktree-icon {
    color: ${({
      theme: {
        colours: { info }
      }
    }) => info[2]};
  }
`
