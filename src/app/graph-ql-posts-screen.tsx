import { ActivityIndicator, Text, FlatList, Button, Alert } from 'react-native';
import React from "react";
import PostListItem from "@/src/components/post-list-item";
import {useGqlPosts} from "@/src/hooks/post";

export default function GraphQLPostsScreen() {
  const { posts, isLoading, error } = useGqlPosts();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data. {error.message}</Text>;
  }

  return (
    <FlatList
      data={posts}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      // @ts-ignore
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
