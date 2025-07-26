'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHOP_INFO } from '../../lib/queries/shop';
import { Card, Heading, Text } from '../ui';

export const ShopifyConnectionTest: React.FC = () => {
  const { loading, error, data } = useQuery(GET_SHOP_INFO);

  if (loading) {
    return (
      <Card>
        <Text>Testing Shopify connection...</Text>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <Heading level={3} color="danger">Connection Error</Heading>
        <Text>Failed to connect to Shopify: {error.message}</Text>
        <Text size="sm" color="muted">
          Check your environment variables and Shopify credentials.
        </Text>
      </Card>
    );
  }

  if (data?.shop) {
    return (
      <Card>
        <Heading level={3} color="primary">✅ Connected to Shopify</Heading>
        <Text>Store: {data.shop.name}</Text>
        <Text size="sm" color="muted">
          Domain: {data.shop.primaryDomain?.host}
        </Text>
      </Card>
    );
  }

  return (
    <Card>
      <Text>No shop data received</Text>
    </Card>
  );
}; 