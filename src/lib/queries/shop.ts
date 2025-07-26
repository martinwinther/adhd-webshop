import { gql } from '@apollo/client';

export const SHOP_INFO_FRAGMENT = gql`
  fragment ShopInfo on Shop {
    name
    description
    primaryDomain {
      url
      host
    }
    privacyPolicy {
      title
      url
    }
    termsOfService {
      title
      url
    }
    refundPolicy {
      title
      url
    }
  }
`;

export const GET_SHOP_INFO = gql`
  query GetShopInfo {
    shop {
      ...ShopInfo
    }
  }
  ${SHOP_INFO_FRAGMENT}
`;

export const GET_SHOP_POLICIES = gql`
  query GetShopPolicies {
    shop {
      privacyPolicy {
        title
        url
      }
      termsOfService {
        title
        url
      }
      refundPolicy {
        title
        url
      }
    }
  }
`; 