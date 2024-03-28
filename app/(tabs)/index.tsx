// @ts-nocheck
import React from 'react';
import {Button, View} from 'react-native';
import PostScreen from "@/src/app/post-screen";
import {StatusBar} from "expo-status-bar";
import useSWR, { SWRConfig } from 'swr'
import {fetcher} from "@/src/utils/fetcher";
import {SWRConfiguration} from "@/src/utils/SWRConfiguration";

export default function TabOneScreen() {
  return (
    <View className={'flex-1'}>
      <SWRConfig
        value={SWRConfiguration}
      >
        <PostScreen />
      </SWRConfig>
      <StatusBar style="auto" />
    </View>
  );
}
