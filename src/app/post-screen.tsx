// @ts-nocheck
import React from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import PostListItem from "@/src/components/post-list-item";
import {usePosts} from "@/src/hooks/post";
import { useSWRConfig } from "swr"

export default function PostScreen() {
  const { posts, error, isLoading } = usePosts();
  const { mutate } = useSWRConfig();
  if (isLoading) return <View className={'flex-1 items-center justify-center'}><ActivityIndicator /></View>
  if (error) return <View className={'flex-1 items-center justify-center'}><Text>Error: {error.message}</Text></View>

  // console.log(JSON.stringify(data, null, 2))
  const runMutation = async () => {
    mutate('https://jsonplaceholder.typicode.com/posts', [])
  }

  return (
    <View className="flex-1 items-center bg-white justify-center">
      <Button title={'Press Me'} onPress={runMutation} />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100, gap: 12}}
        renderItem={({ item }) => (
          <PostListItem item={item} />
        )}
      />
    </View>
  );
}
