// @ts-nocheck
import React from 'react';
import {Button, View} from 'react-native';
import PostScreen from "@/src/app/post-screen";
import {StatusBar} from "expo-status-bar";
import useSWR, { SWRConfig } from 'swr'
import {fetcher} from "@/src/utils/fetcher";

export default function TabOneScreen() {
  return (
    <View className={'flex-1'}>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          dedupingInterval: 2000,
          fetcher
        }}
      >
        <PostScreen />
      </SWRConfig>
      <StatusBar style="auto" />
    </View>
  );
}
