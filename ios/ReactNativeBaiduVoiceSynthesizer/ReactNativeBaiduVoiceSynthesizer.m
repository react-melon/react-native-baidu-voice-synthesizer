//
//  ReactNativeBaiduVoiceSynthesizer.m
//  ReactNativeBaiduVoiceSynthesizer
//
//  Created by leon on 16/8/18.
//  Copyright © 2016年 com.ludafa. All rights reserved.
//

#import "ReactNativeBaiduVoiceSynthesizer.h"

@implementation ReactNativeBaiduVoiceSynthesizer

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(ping:(NSString *)name)
{
    NSLog(@"hello %@", name);
    NSLog(@"Heiheihei %@", name);
}

@end
