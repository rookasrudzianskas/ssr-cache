// @ts-nocheck
import React from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import PostListItem from "@/src/components/post-list-item";
import {useCreatePost, usePosts} from "@/src/hooks/post";
import { useSWRConfig } from "swr"

export default function PostScreen() {
  const { posts, error, isLoading, mutate } = usePosts();
  const { trigger, newPost } = useCreatePost();
  // const { mutate } = useSWRConfig();
  if (isLoading) return <View className={'flex-1 items-center justify-center'}><ActivityIndicator /></View>
  if (error) return <View className={'flex-1 items-center justify-center'}><Text>Error: {error.message}</Text></View>

  // console.log(JSON.stringify(data, null, 2))
  const runMutation = async () => {
    await mutate()
  }

  const onCreatePost = () => {
    trigger({
      title: 'foo',
      body: 'bar',
      userId: 1
    });

    try {
      await trigger(newPost, {
        optimisticData: (current) => {
          return [newPost, ...current];
        },
        revalidate: false,
        rollbackOnError: (error) => {
          return true;
        },
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className="flex-1 items-center bg-white justify-center">
      <Button title={'Press Me'} onPress={runMutation} />
      <Button title={'Create Me'} onPress={onCreatePost} />
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
