package org.babyfish.jimmer.client.generator;

import java.util.HashMap;
import java.util.Map;

public class Namespace {

    private final Map<String, Integer> map = new HashMap<>();

    private final Map<String, Namespace> subMap = new HashMap<>();

    public String allocate(String name) {
        int value = map.getOrDefault(name, 1);
        map.put(name, value + 1);
        return value == 1 ? name : name + '_' + value;
    }

    public Namespace subNamespace(String name) {
        return subMap.computeIfAbsent(name, it -> new Namespace());
    }
}
