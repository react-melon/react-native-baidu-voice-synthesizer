//
//  ReactNativeBaiduVoiceSynthesizer.h
//  ReactNativeBaiduVoiceSynthesizer
//
//  Created by leon on 16/8/18.
//  Copyright © 2016年 com.ludafa. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"
#import "BDSSpeechSynthesizer.h"

@interface ReactNativeBaiduVoiceSynthesizer : NSObject <RCTBridgeModule, BDSSpeechSynthesizerDelegate>

@end
