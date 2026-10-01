import { useAuth, useSignUp } from "@clerk/expo";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUp() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const { isSignedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const isLoading = fetchStatus === "fetching";

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-mansio-bg"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center px-6 py-12">
          {/* Header */}
          <Text className="text-4xl font-bold text-mansio-primary">
            Buat Akun
          </Text>
          <Text className="mb-10 mt-3 text-base text-mansio-muted">
            Daftar untuk mulai memakai Mansio.
          </Text>

          <View className="mb-4 flex-row gap-3">
            <TextInput
              className="flex-1 rounded-xl border border-mansio-border bg-mansio-card px-4 py-4 text-base text-mansio-primary"
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Nama depan"
              placeholderTextColor="#71717A"
              autoCapitalize="words"
            />
            <TextInput
              className="flex-1 rounded-xl border border-mansio-border bg-mansio-card px-4 py-4 text-base text-mansio-primary"
              value={lastName}
              onChangeText={setLastName}
              placeholder="Nama belakang"
              placeholderTextColor="#71717A"
              autoCapitalize="words"
            />
          </View>

          <View className="mb-4">
            <TextInput
              className="rounded-xl border border-mansio-border bg-mansio-card px-4 py-4 text-base text-mansio-primary"
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#71717A"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
            />
            {errors.fields?.emailAddress && (
              <Text className="mt-2 text-sm text-red-600">
                {errors.fields.emailAddress.message}
              </Text>
            )}
          </View>

          <View>
            <TextInput
              className="rounded-xl border border-mansio-border bg-mansio-card px-4 py-4 text-base text-mansio-primary"
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#71717A"
              secureTextEntry
              autoCapitalize="none"
            />
            {errors.fields?.password && (
              <Text className="mt-2 text-sm text-red-600">
                {errors.fields.password.message}
              </Text>
            )}
          </View>

          <TouchableOpacity
            className="mt-8 w-full items-center rounded-xl bg-mansio-primary py-4 active:opacity-80 "
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-base font-bold text-white">Daftar</Text>
            )}
          </TouchableOpacity>

          <View className="my-6 flex-row items-center">
            <View className="h-px flex-1 bg-mansio-border" />
            <Text className="mx-3 text-sm text-mansio-muted">atau</Text>
            <View className="h-px flex-1 bg-mansio-border" />
          </View>

          <TouchableOpacity className="flex-row items-center justify-center rounded-xl border border-mansio-border bg-mansio-bg py-4 active:opacity-70">
            <Image
              source={require("../../../assets/images/google.png")}
              style={{ width: 20, height: 20, marginRight: 12 }}
              contentFit="contain"
            />
            <Text className="text-base font-medium text-mansio-primary">
              Lanjutkan dengan Google
            </Text>
          </TouchableOpacity>

          <View className="mt-5 flex-row justify-center">
            <Text className="text-sm text-mansio-muted">
              Sudah punya akun?{" "}
            </Text>
            <Link href="/sign-in" asChild>
              <Text className="text-sm text-mansio-primary font-bold">
                Masuk
              </Text>
            </Link>
          </View>

          <View nativeID="clerk-captcha" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
