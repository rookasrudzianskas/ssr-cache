//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useUser} from "@/src/hooks/users";

const truncateTitle = title => {
  if (title.length > 50) {
    return title.charAt(0).toUpperCase() + title.slice(1).slice(0, 50) + '...';
  } else {
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
};


const PostListItem = ({item}: {item: any}) => {
  const { user, error, isLoading } = useUser(item.userId);

  if (isLoading) return <View className={'flex-1 items-center justify-center'}><ActivityIndicator /></View>
  if (error) return <View className={'flex-1 items-center justify-center'}><Text>Error: {error.message}</Text></View>

  return (
    <TouchableOpacity activeOpacity={0.7} className={'p-4 bg-white border border-gray-200 rounded-xl mx-3'}>
      <Text className={'font-semibold text-lg'}>
        {truncateTitle(item.title)}
      </Text>
      <View>
        <Text>{item.body}</Text>
        <Text className={'text-gray-500 text-xs mt-2'}>
          By: {user?.name} • <Text className={'lowercase'}>{user?.email}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostListItem;
