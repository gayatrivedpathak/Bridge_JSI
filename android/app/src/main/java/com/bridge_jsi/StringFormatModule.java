package com.bridge_jsi;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class StringFormatModule extends ReactContextBaseJavaModule {
    public StringFormatModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "StringFormat";
    }

    @ReactMethod
    public void capitalise(String text, Promise promise){
        try{
            Log.d("StringFormatModule", "capitalise: " + text);
            Log.d("StringFormatModule",text.toUpperCase());
            promise.resolve(text.toUpperCase());
        } catch (Exception e) {
            promise.resolve(e);
        }
    }
}




